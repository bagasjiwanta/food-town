import { RootStackNavigations } from './components/Navigations'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackNavigations {}
  }
}
