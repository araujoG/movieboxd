export default (environment: { apiUrl: string }) => ({
  GET: {
    allMovies: environment.apiUrl + '/movies',
    movieById: environment.apiUrl + '/movies/:id',
  }
})