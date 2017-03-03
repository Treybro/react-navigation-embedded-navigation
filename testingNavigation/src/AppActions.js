/**
 * @providesModule AppActions
 */

const SHOW_FIXTURE = 'SHOW_FIXTURE';

function showFixture (fixureID, competitionId, compeitionYear) {

  return {

    type: SHOW_FIXTURE,
    fixureID,
    competitionId,
    compeitionYear,
  };
}

export {

  SHOW_FIXTURE,
  showFixture,
};