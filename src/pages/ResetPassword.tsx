import Title from "../components/common/Title";
import InputText from "../components/common/Input";
import Button from "../components/common/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { requestPasswordReset, passwordReset } from "../api/auth.api";
import { useAlert } from "../hooks/useAlert";
import { SignupStyle, type SignupProps } from "./Signup";
import { useState } from "react";

export default function ResetPassword() {
    const navigate = useNavigate();
    const { showAlert } = useAlert();
    const [resetRequested, setResetRequested] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignupProps>();

    const onSubmit = (data: SignupProps) => {
        if (resetRequested) {
            passwordReset(data).then(() => {
                showAlert('비밀번호가 재설정되었습니다.');
                navigate('/login');
            })
        } else {
            requestPasswordReset(data).then(() => {
                setResetRequested(true)
            })
        }
    }
    
    return (
        <>
            <Title size='large'>비밀번호 재설정</Title>
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
                    {resetRequested && (
                        <fieldset>
                            <InputText 
                                inputType="password" 
                                placeholder="비밀번호" 
                                {...register('password', { required: true })}
                            />
                            {errors.password && <p className="error-text">비밀번호를 입력해 주세요.</p>}
                        </fieldset>
                    )}
                    <fieldset>
                        <Button 
                            type="submit"
                            size="medium" 
                            scheme="primary" 
                        >
                            {resetRequested ? '비밀번호 재설정' : '재설정 요청'}
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