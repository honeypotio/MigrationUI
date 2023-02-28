import styled from "styled-components";
import { Progress } from "../types";
import { config } from "../../config";

const { theme } = config;

const SPACE_UNIT = 10;
const BORDER_RADIUS = 4;

export const getColor = (progress: Progress) => {
  const { color, backgroundColor } = config.elementProgress[progress];
  return { color, backgroundColor };
};

export const SectionGroup = styled.div`
  display: flex;
  margin-bottom: ${SPACE_UNIT}px;
`;

const BaseBox = styled.div`
  display: flex;
  gap: ${SPACE_UNIT}px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-radius: ${BORDER_RADIUS}px;

  min-width: 100px;

  & & {
    border: 1px solid ${theme.boxBorder};
  }
`;

export const SectionBox = styled(BaseBox)`
  background: ${theme.sectionHeaderBackground};
  color: ${theme.sectionHeaderColor};
  width: 100px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: none;
`;

export const Row = styled.div`
  display: flex;
  gap: ${SPACE_UNIT}px;
  flex-wrap: wrap;
  flex: 1;
  padding: ${SPACE_UNIT}px;
  background: ${theme.sectionBodyBackground};
  border-top-right-radius: ${BORDER_RADIUS}px;
  border-bottom-right-radius: ${BORDER_RADIUS}px;
`;

export const PageTitle = styled.h1`
  text-align: center;
`;

export const Title = styled.h4``;
export const InnerTitle = styled.h5``;

interface ElementProps {
  backgroundColor: string;
}

export const Element = styled(BaseBox)<ElementProps>`
  color: ${({ color }) => color};
  background: ${({ backgroundColor }) => backgroundColor};
  transition: 1s background-color;
`;

export const ElementsGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${SPACE_UNIT}px;
`;

export const Legend = styled.ul`
  list-style: none;
  display: flex;
  gap: ${SPACE_UNIT}px;
  align-items: center;
  justify-content: center;
`;

export const LegendItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${SPACE_UNIT}px;
`;

interface LegendColorProps {
  backgroundColor: string;
}
export const LegendColor = styled.span<LegendColorProps>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: ${BORDER_RADIUS}px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

export const TimeWrapper = styled.div`
  display: flex;
  gap: ${SPACE_UNIT}px;
  align-items: center;
  justify-content: center;
`;
