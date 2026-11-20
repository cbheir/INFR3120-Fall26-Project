
let express = require('express');
let router = express.Router();

// Temporary event data
let events = [
  {
    id: 1,
    name: 'Tech Conference',
    date: '2026-11-25',
    location: 'Toronto, Canada',
    description: 'A conference for tech enthusiasts and professionals.'
  },
  {
    id: 2,
    name: 'Music Festival',
    date: '2026-12-05',
    location: 'Oshawa',
    description: 'A festival featuring live music performances from letious artists.'
  },
  {
    id: 3,
    name: 'Art Exhibition',
    date: '2026-12-15',
    location: 'Whitby, Canada',
    description: 'An exhibition showcasing contemporary art from local artists.'
  }
];

// Display all events
router.get('/', function(req, res, next) {
  res.render('events', {
    title: 'Curate Events',
    events: events
  });
});
// Show the page to create an event
router.get('/create', function(req, res, next) {
  res.render('createEvent', {
    title: 'Create Event'
  });
});
// Display details for one event
router.get('/:id', function(req, res, next) {
  let selectedEvent = events.find(function(event) {
    return event.id == req.params.id;
  });

  if (!selectedEvent) {
    return res.status(404).send('Event not found');
  }

  res.render('event-details', {
    title: selectedEvent.name,
    event: selectedEvent
  });
});


// GET route to display the Edit Event form
router.get('/:id/edit', function(req, res, next) {

  // Find the event matching the ID in the URL
  let selectedEvent = events.find(function(event) {
    return event.id == req.params.id;
  });

  // Return an error if the event does not exist
  if (!selectedEvent) {
    return res.status(404).send('Event not found');
  }

  // Display the edit form with existing event information
  res.render('edit-event', {
    title: 'Edit Event',
    event: selectedEvent
  });

});


// POST route to save updated event information
router.post('/:id/edit', function(req, res, next) {

  // Find the event that needs to be updated
  let selectedEvent = events.find(function(event) {
    return event.id == req.params.id;
  });

  // Check whether the event exists
  if (!selectedEvent) {
    return res.status(404).send('Event not found');
  }

  // Check that all required fields were submitted
  if (!req.body.name || !req.body.date ||
      !req.body.location || !req.body.description) {
    return res.status(400).send('All fields are required');
  }

  // Update the event using submitted form values
  selectedEvent.name = req.body.name;
  selectedEvent.date = req.body.date;
  selectedEvent.location = req.body.location;
  selectedEvent.description = req.body.description;

  // Return to the updated event details page
  res.redirect('/events/' + selectedEvent.id);

});


// POST route to delete an existing event
router.post('/:id/delete', function(req, res, next) {

  // Find the index of the selected event
  let eventIndex = events.findIndex(function(event) {
    return event.id == req.params.id;
  });

  // Check whether the event exists
  if (eventIndex === -1) {
    return res.status(404).send('Event not found');
  }

  // Remove one event from the array
  events.splice(eventIndex, 1);

  // Return to the event listing page
  res.redirect('/events');

});
// This is used to save an event which is prompted by user
router.post('/create', function(req, res, next) {
  if (!req.body.name || !req.body.date ||
      !req.body.location || !req.body.description) {
    return res.status(400).send('Must Fill Out Everything!');
  }

  let IdNew = 1;

  events.forEach(function(event) {
    if (event.id >= IdNew) {
      IdNew = event.id + 1;
    }
  });

  let EventNew = {
    id: IdNew,
    name: req.body.name,
    date: req.body.date,
    location: req.body.location,
    description: req.body.description
  };

  events.push(EventNew);
  res.redirect('/events');
});
module.exports = router;
