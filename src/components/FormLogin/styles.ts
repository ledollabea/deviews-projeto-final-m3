import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;

  height: 80%;
  width: 90%;

  label {
    width: 90%;
  }

  .div_input {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    width: 100%;
  }

  input {
    width: 90%;
    height: 3rem;

    padding-left: 1.3125rem;

    outline: 0;

    border-radius: 0.5rem;
    border: 2px solid transparent;

    color: var(--color-white-0);
    box-shadow: var(--box-shadow);
    background-color: var(--color-grey-2);
    transition: 0.5s;

    &:focus {
      border-color: var(--color-grey-1);
    }
  }

  .div_span {
    display: flex;
    align-items: center;
    gap: 0.3125rem;

    width: 90%;

    font-size: 0.75rem;
    line-height: 0.9375rem;

    color: var(--color-grey-0);

    span {
      text-align: justify;
    }

    svg {
      min-width: 0.9375rem;
      min-height: 0.9375rem;

      color: var(--color-red-0);
    }
  }

  @media screen and (min-width: 425px) {
    label,
    .div_span,
    .div_input,
    button {
      width: 18.1875rem;
    }
    input {
      width: 16.875rem;
    }
  }
`;

export const ContainerPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  width: 90%;

  position: relative;

  input {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;

    width: auto;

    position: absolute;

    right: 0;
    bottom: 14px;

    background-color: transparent;

    svg {
      color: var(--color-grey-0);

      width: 1.125rem;
      height: 1.125rem;
    }

    .eyeOpen {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  @media screen and (min-width: 425px) {
    width: 16.875rem;
  }
`;
