import { css } from 'styled-components';

export const slideOutLeft = css`
  animation: slide-out-left 0.5s forwards;

  @keyframes slide-out-left {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(-20%);
      opacity: 0;
    }
  }
`;

export const slideOutRight = css`
  animation: slide-out-right 0.5s forwards;

  @keyframes slide-out-right {
    0% {
      transform: translateX(0%);
      opacity: 1;
    }
    100% {
      transform: translateX(20%);
      opacity: 0;
    }
  }
`;

export const slideInLeft = css`
  animation: slide-in-left 0.5s forwards;

  @keyframes slide-in-left {
    0% {
      transform: translateX(20%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

export const slideInRight = css`
  animation: slide-in-right 0.5s forwards;

  @keyframes slide-in-right {
    0% {
      transform: translateX(-20%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

export const fadeIn = css`
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;
