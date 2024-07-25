function PlusButton({
  isActive = false,
  size = '4.8rem',
  boldness = '0.6rem',
  color = '#000',
}) {
  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          backgroundColor: color,
          height: boldness,
          width: '100%',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          transition: 'all 0.4s',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          backgroundColor: color,
          height: isActive ? 0 : '100%',
          width: boldness,
          top: '50%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          transition: 'all 0.4s',
        }}
      ></div>
    </div>
  );
}

export default PlusButton;
