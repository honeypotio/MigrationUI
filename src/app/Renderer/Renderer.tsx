import React from "react";
import Confetti from "react-confetti";
import { Progress } from "../types";

import { config } from "../../config";

import {
  ElementsGroup,
  Element,
  Row,
  Title,
  InnerTitle,
  SectionGroup,
  SectionBox,
  getColor,
  Legend,
  LegendItem,
  LegendColor,
  TimeWrapper,
  PageTitle,
} from "./Renderer.styles";
import { useRedererViewModel } from "./Renderer.viewModel";
import { Footer } from "./Footer";

const App = () => {
  const {
    allDone,
    selectedDate,
    migrationDates,
    rangeIndex,
    animateButtonText,
    data,
    handleChangeDate,
    handleChangeRange,
    handleAnimationButtonClick,
  } = useRedererViewModel();

  return (
    <div>
      {allDone && <Confetti recycle={false} numberOfPieces={2000} />}
      <PageTitle>
        {config.title} @ {selectedDate}
      </PageTitle>
      <TimeWrapper>
        <div>📅</div>
        <input
          type="range"
          min="0"
          max={migrationDates.length - 1}
          onChange={handleChangeRange}
          value={rangeIndex}
        />
        <select onChange={handleChangeDate} value={selectedDate}>
          {migrationDates.map((date) => (
            <option value={date}>{new Date(date).toLocaleDateString()}</option>
          ))}
        </select>
        <button onClick={handleAnimationButtonClick} type="button">
          {animateButtonText}
        </button>
      </TimeWrapper>
      <Legend>
        <LegendItem>
          <LegendColor {...getColor(Progress.done)} />{" "}
          {config.elementProgress.done.legendLabel}
        </LegendItem>
        <LegendItem>
          <LegendColor {...getColor(Progress.notDone)} />{" "}
          {config.elementProgress.notDone.legendLabel}
        </LegendItem>
        <LegendItem>
          <LegendColor {...getColor(Progress.inProgress)} />{" "}
          {config.elementProgress.inProgress.legendLabel}
        </LegendItem>
      </Legend>
      {Object.values(data.sections).map((section, i) => (
        <SectionGroup key={i}>
          <SectionBox>
            <Title>{section.label}</Title>
          </SectionBox>
          <Row>
            {Object.values(section.elements)?.map((element, j) => (
              <Element key={j} {...getColor(element.progress)}>
                <Title>{element.label}</Title>
                {!!element.elements && (
                  <ElementsGroup>
                    {Object.values(element.elements).map((innerElement, k) => (
                      <Element key={k} {...getColor(innerElement.progress)}>
                        <InnerTitle>{innerElement.label}</InnerTitle>
                      </Element>
                    ))}
                  </ElementsGroup>
                )}
              </Element>
            ))}
          </Row>
        </SectionGroup>
      ))}
      <Footer />
    </div>
  );
};

export default App;
