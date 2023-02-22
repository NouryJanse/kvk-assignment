export default interface UserState {
  data: {
    companies: Company[]
  }
  status: {
    getCompanies: 'initial'
    searchCompany: 'initial'
    getCompany: 'initial'
  }
  error: {}
}
