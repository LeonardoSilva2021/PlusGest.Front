export interface InputComponentProps {
    label: string;
    name: string;
    type: 'text' | 'number' | 'mask',
    mask?: 'rg' | 'cpf' | 'dataNascimento' | 'celular' | 'cep'
}