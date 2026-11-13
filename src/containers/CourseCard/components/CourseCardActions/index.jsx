import React from 'react';
import PropTypes from 'prop-types';

import { ActionRow } from '@openedx/paragon';

import { useCourseData, useEntitlementInfo } from 'hooks';

import CourseCardActionSlot from 'plugin-slots/CourseCardActionSlot';
import SelectSessionButton from './SelectSessionButton';
import BeginCourseButton from './BeginCourseButton';
import ResumeButton from './ResumeButton';
import ViewCourseButton from './ViewCourseButton';


// Table de correspondance course_id -> durée
const COURSE_DURATIONS = {
  'course-v1:osac+01+2027': '2H30',
  'course-v1:osac+novembre+2026': '2H30',
  'course-v1:osac+decembre+2026': '1H45',  
};
const DEFAULT_DURATION = '2H30';


export const CourseCardActions = ({ cardId }) => {
  const cardData = useCourseData(cardId);
  const hasStarted = cardData.enrollment.hasStarted || false;
  const { isEntitlement, isFulfilled } = useEntitlementInfo(cardData);
  const isArchived = cardData.courseRun.isArchived || false;

  const courseId = cardData.courseRun.courseId;
  const duration = COURSE_DURATIONS[courseId] || DEFAULT_DURATION;

  return (
    <ActionRow data-test-id="CourseCardActions">
      <CourseCardActionSlot cardId={cardId} />

      {duration && <p className="mb-0">{duration}</p>}

      {isEntitlement && (isFulfilled
        ? <ViewCourseButton cardId={cardId} />
        : <SelectSessionButton cardId={cardId} />
      )}
      {(isArchived && !isEntitlement) && (
        <ViewCourseButton cardId={cardId} />
      )}
      {!(isArchived || isEntitlement) && (hasStarted
        ? <ResumeButton cardId={cardId} />
        : <BeginCourseButton cardId={cardId} />
      )}
    </ActionRow>
  );
};
CourseCardActions.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCardActions;
