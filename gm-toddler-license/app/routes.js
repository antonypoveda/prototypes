//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Run this code when a form is submitted to 'up-late-answer'
router.post('/up-late-answer', function (req, res) {

    // Make a variable and give it the value from 'up-late'
    var upLate = req.session.data['how-late']
  
    // Check whether the variable matches a condition
    if (upLate == "In bed by 7pm"){
      // Send user to ineligible page
      res.redirect('/ineligible')
    } else {
      // Send user to next page
      res.redirect('/line-up')
    }
  
  })
