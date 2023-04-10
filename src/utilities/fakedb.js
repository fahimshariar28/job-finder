const addToDb = (id) => {
  const applied = getAppliedJob();
  if (applied) {
    const alreadyApplied = applied == id;
    if (alreadyApplied) {
      alert("ekbar e hbe");
    } else {
      alert("nai");
    }
  } else {
    localStorage.setItem("applied-job", JSON.stringify(id));
  }
};

const getAppliedJob = () => {
  let appliedJob = {};

  const applied = localStorage.getItem("applied-job");
  if (applied) {
    appliedJob = JSON.parse(applied);
  }
  return appliedJob;
};

export { addToDb, getAppliedJob };
