import trae from 'trae'
import configService from './config'

const musicAppService = trae.create({
  baseUrl: configService.apiUrl
})

export default musicAppService
