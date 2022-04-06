import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { wrapper, store } from "../redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { IInitialSet } from "../redux/reducers/setReducer/state";
function MyApp({ Component, pageProps }: AppProps) {
  const state = useSelector(
    (state: { setReducer: IInitialSet }) => state.setReducer,
  );
  return (
    <div className={`${state.toggleNav && "fixed w-full"}`}>
      {" "}
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />{" "}
      </Provider>
    </div>
  );
}

export default wrapper.withRedux(MyApp);
