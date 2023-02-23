export default interface UserState {
  data: {
    companies: Company[]
    searchedCompanies: Company[]
  }
  status: {
    getCompanies: 'initial'
    searchCompany: 'initial'
    getCompany: 'initial'
  }
  error: {}
}
