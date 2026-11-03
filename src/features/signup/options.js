import male from '@/assets/male.png';
import female from '@/assets/female.png';
import cmale from '@/assets/cmale.png';
import cfemale from '@/assets/cfemale.png';
import student from '@/assets/student.png';
import gov from '@/assets/gov.png';
import jobSeeker from '@/assets/job_seeker.png';
import worker from '@/assets/worker.png';
import others from '@/assets/others.png';
import sstudent from '@/assets/sstudent.png';
import sgov from '@/assets/sgov.png';
import sjobSeeker from '@/assets/sjob_seeker.png';
import sworker from '@/assets/sworker.png';
import sothers from '@/assets/sothers.png';

export const GENDERS = [
  { value: 'male', label: '남자', image: male, selectedImage: cmale },
  { value: 'female', label: '여자', image: female, selectedImage: cfemale }
];

export const CATEGORIES = [
  {
    value: 'student',
    label: '학생',
    image: student,
    selectedImage: sstudent
  },
  { value: 'gov', label: '공시생', image: gov, selectedImage: sgov },
  {
    value: 'job_seeker',
    label: '취준생',
    image: jobSeeker,
    selectedImage: sjobSeeker
  },
  { value: 'worker', label: '직장인', image: worker, selectedImage: sworker },
  { value: 'others', label: '그외', image: others, selectedImage: sothers }
];

export const AGES = [
  { value: 'under10', label: '10대 미만', badge: '10▼' },
  { value: '10s', label: '10대', badge: '10~' },
  { value: '20s', label: '20대', badge: '20~' },
  { value: '30s', label: '30대', badge: '30~' },
  { value: '40s', label: '40대', badge: '40~' },
  { value: '50plus', label: '50대 이상', badge: '50▲' }
];
