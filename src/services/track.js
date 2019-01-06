import musicAppService from './musicapp'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return musicAppService.get('/search', {
    params: { q, type }
  })
    .then(res => res.data)
    .catch((err) => {
      console.log(err)
    })
}

trackService.getById = function (id) {
  return musicAppService.get(`/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
