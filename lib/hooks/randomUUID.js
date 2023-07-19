import { useMemo } from "react";

export default function useRandomUUID(prepend) {
  return useMemo(() => {
    let uuid = crypto.randomUUID();

    if (prepend) {
      uuid = `${prepend}-${uuid}`;
    }

    return uuid;
  }, [prepend]);
}
