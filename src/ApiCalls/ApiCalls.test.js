import { getArticles } from './ApiCalls'

describe('getArticles', () => {
  const mockResponse = [
    {
      id: 1,
      headline: 'Mysterious comet',
      img: './image.jpg',
      description: 'Mysterious comet will cause a rare \'Unicorn\' meteor storm this week.',
      url: 'https://www.example.com'
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => { return Promise.resolve(mockResponse) }
      })
    })
  })

  it('should call fetch with the correct url', () => {
    getArticles()
    expect(window.fetch).toHaveBeenCalledWith('https://whats-new-api.herokuapp.com/api/v1/news')
  })

  it('should return an array of articles', () => {
    expect(getArticles()).resolves.toEqual(mockResponse)
  })

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })

    expect(getArticles()).rejects.toEqual(Error('Error fetching articles'))
  })

  it('should return an error if promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    })

    expect(getArticles()).rejects.toEqual(Error('fetch failed'))
  })
})
