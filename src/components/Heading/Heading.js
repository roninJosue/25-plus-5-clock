import styled from "styled-components";

const Text = styled.h1`
`

const Heading = ({text = '25 + 5 Clock'}) => {
  return (
    <Text>
      {text}
    </Text>
  );
};

export default Heading;