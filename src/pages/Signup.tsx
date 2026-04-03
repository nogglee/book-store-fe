import styled from "styled-components";
import Title from "../components/common/Title";
import InputText from "../components/common/Input";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signup } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";

export interface SignupProps {
    email: string;
    name: string;
    password: string;
}

export default function Signup() {
    const navigate = useNavigate();
    const { showAlert } = useAlert();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
        signup(data).then((res) => {
            console.log(res);
            
            showAlert('회원 가입이 완료되었습니다.');
            navigate('/login');
        })
    }
    
    return (
        <>
            <Title size='large'>회원가입</Title>
            <SignupStyle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <InputText 
                            inputType="email" 
                            placeholder="이메일" 
                            {...register('email', { required: true })}
                        />
                        {errors.email && <p className="error-text">이메일을 입력해 주세요.</p>}
                    </fieldset>
                    <fieldset>
                        <InputText 
                            inputType="text" 
                            placeholder="이름" 
                            {...register('name', { required: true })}
                        />
                        {errors.name && <p className="error-text">이름을 입력해 주세요.</p>}
                    </fieldset>
                    <fieldset>
                        <InputText 
                            inputType="password" 
                            placeholder="비밀번호" 
                            {...register('password', { required: true })}
                        />
                        {errors.password && <p className="error-text">비밀번호를 입력해 주세요.</p>}
                    </fieldset>
                    <fieldset>
                        <Button 
                            type="submit"
                            size="medium" 
                            scheme="primary" 
                        >
                            회원가입
                        </Button>
                    </fieldset>
                    <div className="info">
                        <Link to='/reset'>비밀번호 초기화</Link>
                    </div>
                </form>
            </SignupStyle>
        </>
    );
}

export const SignupStyle = styled.div`
  max-width: ${({ theme }) => theme.layout.width.small};
  margin: 80px auto;

  fieldset {
    border: 0;
    padding: 0 0 8px 0;
    .error-text {
      color: red;
    }
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
  }

  .info {
    text-align: center;
    margin-top: 1rem;
  }
`;