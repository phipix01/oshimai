// functional implementation of the victor.js functionality i need

// helper functions
const horizontalAngle(vector) => Math.atan2(vector.y, vector.x)
const verticalAngle(vector) => Math.atan2(vector.x, vector.y)

const degrees = 180 / Math.PI
const radian2degrees = rad => rad * degrees
const degrees2radian = deg => deg / degrees

// actual reducer
const vector = (vector = {x:0, y:0}, action) => {
  switch (action.type) {
    case 'VECTOR_ADD':
      return {
        x: vector.x + action.vector.x,
        y: vector.y + action.vector.y
      }

    // http://victorjs.org/#rotate
    case 'VECTOR_ROTATE':
      // create variables for x and y of the old state
      let { x: xOld, y: yOld } = vector
      let { angle } = action
      // calculate x, y for the new state
      let x = (xOld * Math.cos(angle)) - (yOld * Math.sin(angle))
      let y = (xOld * Math.sin(angle)) + (yOld * Math.cos(angle))
      return {
        x,
        y
      }
      break;
    default:
      return vector
  }
}
