const msToMn = {}

function convertMsToMn (ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000 / 1000).toFixed(0))
  const secF = (sec < 10) ? '0' + sec.toString() : sec

  return `${min}:${secF}`
}

msToMn.install = function (Vue) {
  Vue.filter('ms-to-mn', (value) => {
    return convertMsToMn(value)
  })
}

export default msToMn
