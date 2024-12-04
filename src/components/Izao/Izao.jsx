import './Izao.css';

export default function Izao() {
  return (
    <div className='izao'>
      <h1 style={{ fontWeight: 300 }}>
        Hi, This is
        <br />
        <b>Zohra Amel Ouferhat</b>
      </h1>
      <div className="buttons">
        <button style={{ borderColor: 'var(--clr1)' }}>I Code</button>
        <button style={{ borderColor: 'var(--clr2)' }}>I Design</button>
        <button style={{ borderColor: 'var(--clr3)' }}>I Visualize</button>
      </div>
    </div>
  );
}
