import { SignupStyle, type SignupProps } from "./Signup";
import Title from "../components/common/Title";
import InputText from "../components/common/Input";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signin } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { useAuthStore } from "../store/authStore";

export default function Signup() {
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const { storeLogin } = useAuthStore();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
        signin(data)
        .then((res) => {
            storeLogin(res.token);
            
            console.log(res.token)
            showAlert('로그인이 완료되었습니다.');
            navigate('/');
        })
        .catch((err) => {
            console.log(err)
            showAlert('로그인에 실패했습니다.');
        })
    }
    
    return (
        <>
            <Title size='large'>로그인</Title>
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
                            로그인
                        </Button>
                    </fieldset>
                    <div className="info">
                        <Link to='/reset'>비밀번호 재설정</Link>
                    </div>
                </form>
            </SignupStyle>
        </>
    );
}