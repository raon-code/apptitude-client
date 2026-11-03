import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

const INITIAL_DRAFT = {
  nickname: '',
  avatar: null,
  gender: null,
  category: null,
  age: null
};

const SignupContext = createContext(null);

export function SignupProvider({ children }) {
  const [draft, setDraft] = useState(INITIAL_DRAFT);

  const updateDraft = useCallback((patch) => {
    setDraft((current) => ({ ...current, ...patch }));
  }, []);

  const resetDraft = useCallback(() => setDraft(INITIAL_DRAFT), []);

  const value = useMemo(
    () => ({ draft, updateDraft, resetDraft }),
    [draft, updateDraft, resetDraft]
  );

  return (
    <SignupContext.Provider value={value}>{children}</SignupContext.Provider>
  );
}

export function useSignup() {
  const context = useContext(SignupContext);

  if (!context) {
    throw new Error('useSignup은 SignupProvider 안에서만 사용할 수 있습니다.');
  }

  return context;
}
