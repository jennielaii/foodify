import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.styles";

const withSpinner = (WrapperComponent) => {
  const Spinner = ({ isLoading, isStartedFetching, ...otherProps }) => {
    return isLoading && isStartedFetching ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default withSpinner;
