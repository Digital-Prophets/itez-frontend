export default interface IRoutes {
  path: string;
  name: string;
  component: any;
  exact: boolean;
  props?: any;
}
