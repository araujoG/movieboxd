export default (environment: { apiUrl: string }) => ({
  GET: {
    movies: environment.apiUrl + '/movies'
  }
})