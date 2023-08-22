import { Mut, VueService } from 'vue3-oop'

export class UserService extends VueService {
  @Mut() name = 'i am user'
}
