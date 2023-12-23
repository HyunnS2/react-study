import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // handleSubmit : 두 개의 함수를 받는데, 하나는 유효할 때 실행되는 함수(필수) , 하나는 유효하지 않을 때 실행되는 함수 (선택)
  const onValid = (data, e) => {
    console.log("hi", data, e);
  };
  const onInvalid = (error) => {
    console.log("err", error);
  };

  // watch : 실시간으로 입력되는 값을 검사해 줌
  //   console.log(watch());
  //   console.log(watch("password")); // 비밀번호만 검사

  console.log("errors", errors);

  return (
    <>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          {...register("username", {
            required: "이름을 입력하세요", // true,
            minLength: {
              message: "최소 두글자 이상 작성하세요, ",
              value: 2,
            },
          })}
          placeholder="username"
        />
        {/* errors.username이 있다면 콘솔에 메시지를 출력. */}
        {errors.username?.message}
        <br></br>
        <input
          type="text"
          {...register("email", {
            required: "이메일을 입력하세요",
            validate: {
              useGmail: (value) => {
                return (
                  value.includes("gmail.com") || `gmail로만 가입 가능 합니다`
                );
              },
            },
          })}
          placeholder="email"
        />
        {errors.email?.message}
        <br></br>
        <input type="text" {...register("password")} placeholder="password" />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
