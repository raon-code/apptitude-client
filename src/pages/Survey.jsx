import Back from '@/components/Back';
import Button from '@/components/Button';
import Main from '@/components/survey/Main';
import { useState } from 'react';

const titles = [
  '성별이 어떻게 되세요?',
  '직업이 어떻게 되세요?',
  '연령대가 어떻게 되세요?'
];

export default function Survey() {
  const [index, setIndex] = useState(1);
  const [title, setTitle] = useState(titles[0]);
  function onClick() {
    if (titles.length === index) {
      console.log('끝');
      return;
    }
    setIndex((cur) => cur + 1);
    setTitle(titles[index]);
  }

  return (
    <div>
      <Back />
      <Main title={title} />
      <Button clickEvent={onClick} step={'다음'} />
    </div>
  );
}
