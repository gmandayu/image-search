import { Route, Switch } from "react-router-dom";
import CollectionLayout from "./../Layouts/Collections/CollectionLayout";
import HomeLayout from "./../Layouts/Home/HomeLayout";
import NotFoundLayout from "./../Layouts/NotFound/NotFoundLayout";
import SearchLayout from "./../Layouts/Search/SearchLayout";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/" component={HomeLayout} />
      <Route path="/collections" component={CollectionLayout} />
      <Route path="/search/:type/:query" component={SearchLayout} />

      <Route component={NotFoundLayout} />
    </Switch>
  );
};

export default Routes;
