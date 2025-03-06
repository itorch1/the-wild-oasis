import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "New user successfully created! Please verify the new account from the user's email"
      );
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  return { signup, isPending };
}
