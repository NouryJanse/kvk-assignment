import { ReactElement, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import RootState from '../../../types/RootState'
import { getCompany, getCompanies } from '../../../redux/reducers/companies/companySlice'
import REDUX_STATE from '../../../constants/REDUX_STATE'

const Detail: React.FC = (): ReactElement => {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const companies: Company[] = useSelector((state: RootState) => state.companySlice.data.companies)
  const status = useSelector((state: RootState) => state.companySlice.status)
  const [company, setCompany] = useState<Company>({} as Company)
  const defaultImage = `https://picsum.photos/300?  ${Math.random()}` // the appended random results in the expected behavior but is not a desired fix
  const [image, setImage] = useState(defaultImage)

  useEffect(() => {
    if (params.id && companies.length) {
      const currentCompany = companies.find((companyInList: Company) => {
        return Number(companyInList.id) === Number(params.id)
      })
      if (currentCompany) setCompany(currentCompany as Company)
    }
  }, [params.id, companies])

  useEffect(() => {
    if (status.getCompany === REDUX_STATE.FULFILLED && company.id) {
      toast(`${company.name} was fetched`, {
        icon: '👏',
      })
    }
  }, [status])

  if (status.getCompanies === REDUX_STATE.REJECTED || status.getCompany === REDUX_STATE.REJECTED) {
    toast.error('Sorry, no results were found.')
  }

  // if the page is refreshed it will fetch all the companies too
  useEffect(() => {
    if (!companies.length) {
      // @ts-ignore:next-line
      dispatch(getCompanies())
    }
    if (company.id && company?.fetchComplete !== true) {
      // @ts-ignore:next-line
      dispatch(getCompany(params.id))
    }
  }, [company])

  return (
    <div>
      {company.id ? (
        // should be refactored into a seperate component
        <div>
          <div className="flex flex-row justify-between">
            <div className="mb-6">
              <h1 className="text-4xl">{company.name}</h1>
              <span className="block italic text-sm">{company.catchPhrase}</span>
            </div>
            <span
              onClick={(): void => {
                navigate('/')
              }}
              role="presentation"
              className="self-center font-bold text-green hover:underline cursor-pointer"
            >
              Terug naar home
            </span>
          </div>

          <div className="flex flex-col md:flex-row mb-2">
            <img
              src={image}
              alt=""
              width="300px"
              height="300px"
              onMouseEnter={(): void => setImage(company.logo)}
              onMouseLeave={(): void => setImage(defaultImage)}
              className="mb-4 mr-4 rounded-md"
            />
            <div>
              <span className="block mb-3">We zijn gevestigd in: {company.city}</span>

              <span>
                Meer over ons weten? Ga naar onze website op{' '}
                <a href={company.website} target="_blank" rel="noreferrer" className="hover:font-bold underline">
                  {company.website}
                </a>
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl">Ons verhaal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Sed faucibus turpis in eu mi bibendum neque egestas congue. Amet commodo nulla
              facilisi nullam. Massa tincidunt dui ut ornare lectus sit amet est. Integer vitae justo eget magna
              fermentum iaculis eu non. Nunc mattis enim ut tellus elementum sagittis. Commodo ullamcorper a lacus
              vestibulum sed arcu. In hac habitasse platea dictumst quisque sagittis purus sit. Amet massa vitae tortor
              condimentum lacinia quis vel. Porta nibh venenatis cras sed. Consequat interdum varius sit amet mattis
              vulputate enim. Mauris nunc congue nisi vitae suscipit. Sit amet mattis vulputate enim. Sed egestas
              egestas fringilla phasellus faucibus. Sagittis vitae et leo duis ut diam. Pellentesque pulvinar
              pellentesque habitant morbi tristique. Sagittis eu volutpat odio facilisis mauris sit. Senectus et netus
              et malesuada.
            </p>
            <p>
              Sed odio morbi quis commodo odio aenean sed. In mollis nunc sed id. Ipsum suspendisse ultrices gravida
              dictum fusce ut. Urna nunc id cursus metus aliquam eleifend mi. Adipiscing elit duis tristique
              sollicitudin nibh sit amet. Lacus vel facilisis volutpat est velit egestas dui. Blandit cursus risus at
              ultrices. Sapien faucibus et molestie ac feugiat sed lectus. Viverra adipiscing at in tellus integer
              feugiat scelerisque varius morbi. Dolor morbi non arcu risus quis varius. Vitae tortor condimentum lacinia
              quis vel. Massa sed elementum tempus egestas sed sed. Phasellus egestas tellus rutrum tellus pellentesque
              eu tincidunt tortor. Enim facilisis gravida neque convallis a cras semper auctor neque. Sed enim ut sem
              viverra aliquet. Curabitur gravida arcu ac tortor dignissim. Erat pellentesque adipiscing commodo elit at
              imperdiet dui accumsan sit. Nisl tincidunt eget nullam non nisi. Viverra mauris in aliquam sem fringilla
              ut. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Bibendum at varius vel pharetra vel
              turpis. Pellentesque id nibh tortor id aliquet. Turpis tincidunt id aliquet risus feugiat in ante metus
              dictum. Risus ultricies tristique nulla aliquet enim. Scelerisque viverra mauris in aliquam sem fringilla
              ut morbi tincidunt. Nunc mi ipsum faucibus vitae aliquet nec. Rhoncus est pellentesque elit ullamcorper
              dignissim cras tincidunt lobortis feugiat. Risus ultricies tristique nulla aliquet. Cursus mattis molestie
              a iaculis at erat pellentesque adipiscing. Blandit aliquam etiam erat velit scelerisque in. Pharetra magna
              ac placerat vestibulum lectus.
            </p>
            <p>
              Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Tincidunt ornare massa eget egestas purus
              viverra accumsan in. Enim ut tellus elementum sagittis vitae et leo duis. Urna neque viverra justo nec
              ultrices dui. Nibh praesent tristique magna sit amet purus gravida quis. Ipsum nunc aliquet bibendum enim.
              Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Massa enim nec dui nunc mattis. Ut
              tortor pretium viverra suspendisse potenti nullam ac. Accumsan in nisl nisi scelerisque eu ultrices vitae
              auctor. Ut venenatis tellus in metus vulputate eu. Nunc scelerisque viverra mauris in aliquam sem
              fringilla ut. Varius quam quisque id diam vel quam elementum pulvinar. Suscipit tellus mauris a diam
              maecenas. Pharetra vel turpis nunc eget lorem. Sapien pellentesque habitant morbi tristique senectus et.
              Fermentum iaculis eu non diam phasellus vestibulum. Congue quisque egestas diam in arcu cursus. Arcu
              bibendum at varius vel pharetra vel turpis. Purus gravida quis blandit turpis cursus. Ridiculus mus mauris
              vitae ultricies leo. Sed velit dignissim sodales ut eu sem integer vitae. Ipsum consequat nisl vel pretium
              lectus. Malesuada pellentesque elit eget gravida cum. Aliquet risus feugiat in ante metus dictum at tempor
              commodo. Sit amet risus nullam eget felis eget. Viverra ipsum nunc aliquet bibendum enim facilisis
              gravida. Eget arcu dictum varius duis at consectetur lorem donec massa.
            </p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Detail
