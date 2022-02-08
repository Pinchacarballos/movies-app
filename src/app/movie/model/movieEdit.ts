import { Actor } from '../../actor/model/actor'
import { Company } from '../../company/model/company'
import { Movie } from './movie'

export interface MovieEdit {
  movie: Movie
  company: Company
  actors: Actor[]
}
