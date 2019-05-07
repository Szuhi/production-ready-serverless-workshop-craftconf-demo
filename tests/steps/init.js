let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api     = "https://h90l8orlsa.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table   = "restaurants-dev-tszuhan"
  process.env.AWS_REGION          = "eu-west-1"
  process.env.order_events_stream = 'orders-dev-tszuhan'
  process.env.restaurant_notification_topic = 'restaurants-dev-tszuhan'
  process.env.TEST_ROOT           = "https://h90l8orlsa.execute-api.eu-west-1.amazonaws.com/dev"
  
  initialized = true
}

module.exports = {
  init
}