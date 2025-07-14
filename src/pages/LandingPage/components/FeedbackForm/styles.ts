import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 32px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 500;
`;

export const FormInput = styled.input`
  height: 48px;
  padding: 0 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  color: #1a1a1a;
  transition: border-color 0.2s;

  @media (max-width: 768px) {
    height: 44px;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border-color: #007aff;
  }
`;

export const FormTextarea = styled.textarea`
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  color: #1a1a1a;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s;

  @media (max-width: 768px) {
    font-size: 14px;
    min-height: 100px;
  }

  &:focus {
    outline: none;
    border-color: #007aff;
  }
`;

export const SubmitButton = styled.button`
  height: 48px;
  padding: 0 32px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  @media (max-width: 768px) {
    height: 44px;
    font-size: 14px;
    width: 100%;
  }

  &:hover {
    background-color: #333;
  }
`;

export const MessageResponse = styled.p<{ isSuccess: boolean }>`
  color: ${({ isSuccess }) => (isSuccess ? "#28a745" : "#dc3545")};
`;
