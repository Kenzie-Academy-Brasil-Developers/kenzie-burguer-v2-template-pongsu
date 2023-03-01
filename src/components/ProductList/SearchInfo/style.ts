import styled from 'styled-components';

export const StyledSearchInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
  margin-bottom: 25px;
  font-family: Inter;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3px;
  }

  .resultTitle {
    color: #333333;
    font-size: 23px;
    line-height: 34px;
    font-weight: 600;
  }

  .searchText {
    color: #828282;
    font-size: 20px;
    line-height: 27px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    display: none;
    margin-left: 20px;
    max-height: 40px;
  }

  @media (min-width: 720px) {
    button {
      display: flex;
      align-items: center;
    }
  }
`;
