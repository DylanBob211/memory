/* eslint-disable eqeqeq */
import React from 'react';
import {
  SettingsMenuWrapper, SettingsMenuBackButton, SettingsRadioUnit, SettingsRadioGroup, TextElement,
} from './SettingsMenuElements';

const SettingsMenu = (
  {
    closeSettingsMenu,
    setMovesLimitMultiplier,
    movesLimitMultiplier,
    timeToMemorizeCards,
    setTimeToMemorizeCards,
    timeLimitMultiplier,
    setTimeLimitMultiplier,
  },
) => (
  <SettingsMenuWrapper>
    <TextElement>Limit the moves you can do</TextElement>
    <SettingsRadioGroup>
      <SettingsRadioUnit
        id="0xCards"
        name="movesLimit"
        value="0"
        tag="No limits"
        warning
        checked={movesLimitMultiplier == 0}
        onChange={event => setMovesLimitMultiplier(event.target.value)}
      />
      <SettingsRadioUnit
        id="5xCards"
        name="movesLimit"
        value="5"
        tag="5xCards"
        checked={movesLimitMultiplier == 5}
        onChange={event => setMovesLimitMultiplier(event.target.value)}
      />
      <SettingsRadioUnit
        id="4xCards"
        name="movesLimit"
        value="4"
        tag="4xCards"
        checked={movesLimitMultiplier == 4}
        onChange={event => setMovesLimitMultiplier(event.target.value)}
      />
      <SettingsRadioUnit
        id="3xCards"
        name="movesLimit"
        value="3"
        tag="3xCards"
        checked={movesLimitMultiplier == 3}
        onChange={event => setMovesLimitMultiplier(event.target.value)}
      />
      <SettingsRadioUnit
        id="2xCards"
        name="movesLimit"
        value="2"
        tag="2xCards"
        checked={movesLimitMultiplier == 2}
        onChange={event => setMovesLimitMultiplier(event.target.value)}
      />
      <SettingsRadioUnit
        id="1xCards"
        name="movesLimit"
        value="1"
        tag="1xCards"
        checked={movesLimitMultiplier == 1}
        onChange={event => setMovesLimitMultiplier(event.target.value)}
      />
    </SettingsRadioGroup>

    <TextElement>Play against the clock</TextElement>
    <SettingsRadioGroup>
      <SettingsRadioUnit
        id="0xLV"
        name="timeLimit"
        value="0"
        tag="No limits"
        warning
        checked={timeLimitMultiplier == 0}
        onChange={event => setTimeLimitMultiplier(event.target.value)}
      />
      <SettingsRadioUnit
        id="5MinutesxLV"
        name="timeLimit"
        value={5000 * 60}
        tag="5 Mins x LV"
        checked={timeLimitMultiplier == 5}
        onChange={event => setTimeLimitMultiplier(event.target.value)}
      />
      <SettingsRadioUnit
        id="4MinutesxLV"
        name="timeLimit"
        value={4000 * 60}
        tag="4 Mins x LV"
        checked={timeLimitMultiplier == 4}
        onChange={event => setTimeLimitMultiplier(event.target.value)}
      />
      <SettingsRadioUnit
        id="3MinutesxLV"
        name="timeLimit"
        value={3000 * 60}
        tag="3 Mins x LV"
        checked={timeLimitMultiplier == 3}
        onChange={event => setTimeLimitMultiplier(event.target.value)}
      />
      <SettingsRadioUnit
        id="2MinutesxLV"
        name="timeLimit"
        value={2000 * 60}
        tag="2 Mins x LV"
        checked={timeLimitMultiplier == 2}
        onChange={event => setTimeLimitMultiplier(event.target.value)}
      />
      <SettingsRadioUnit
        id="1MinutesxLV"
        name="timeLimit"
        value={1000 * 60}
        tag="1 Min x LV"
        checked={timeLimitMultiplier == 1}
        onChange={event => setTimeLimitMultiplier(event.target.value)}
      />
    </SettingsRadioGroup>

    <TextElement>Set the time to memorize the card selected</TextElement>
    <SettingsRadioGroup>
      <SettingsRadioUnit
        id="5Seconds"
        name="timeToMemorize"
        value="5000"
        tag="5 Seconds"
        checked={timeToMemorizeCards == 5000}
        onChange={event => setTimeToMemorizeCards(event.target.value)}
      />
      <SettingsRadioUnit
        id="4Seconds"
        name="timeToMemorize"
        value="4000"
        tag="4 Seconds"
        checked={timeToMemorizeCards == 4000}
        onChange={event => setTimeToMemorizeCards(event.target.value)}
      />
      <SettingsRadioUnit
        id="3Seconds"
        name="timeToMemorize"
        value="3000"
        tag="3 Seconds"
        checked={timeToMemorizeCards == 3000}
        onChange={event => setTimeToMemorizeCards(event.target.value)}
      />
      <SettingsRadioUnit
        id="2Seconds"
        name="timeToMemorize"
        value="2000"
        tag="2 Seconds"
        checked={timeToMemorizeCards == 2000}
        onChange={event => setTimeToMemorizeCards(event.target.value)}
      />
      <SettingsRadioUnit
        id="1Seconds"
        name="timeToMemorize"
        value="1000"
        tag="1 Second"
        checked={timeToMemorizeCards == 1000}
        onChange={event => setTimeToMemorizeCards(event.target.value)}
      />
    </SettingsRadioGroup>
    <SettingsMenuBackButton onClick={closeSettingsMenu} />
  </SettingsMenuWrapper>
);

export default SettingsMenu;
