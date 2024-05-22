import Back from '@/components/Back';
import Nav from '@/components/Nav';

export default function Result() {
  function backClick() {
    window.history.back();
  }
  return (
    <>
      <Back title={'대결결과'} backClick={backClick} />
      <div></div>
      <Nav />
    </>
  );
}
