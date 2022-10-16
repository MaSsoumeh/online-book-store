const BookWrapper = ({ children }) => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        paddingRight: 24,
        paddingLeft: 24,
        marginBottom: 100,
        justifyContent: "flex-start",
        marginTop: 36,
        width: "100%",
        maxWidth: "1566px",
      }}
    >
      {children}
    </section>
  );
};

export default BookWrapper;
