'use client';

import { Box, Tab, Tabs } from "@mui/material";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();


  const [value, setValue] = useState("missions");

  // 初期化時やURL変更時にタブの状態を設定
  useEffect(() => {
    if (pathname) {
      // URLパスに基づいてタブの値を設定
      if (pathname === "/missions") setValue("missions");
      else if (pathname === "/add-mission") setValue("add");
      else if (pathname === "/level") setValue("level");
    }
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newVal: string) => {
    setValue(newVal);

    // タブの変更に応じてページ遷移
    if (newVal === "missions") router.push("/missions");
    else if (newVal === "add") router.push("/add-mission");
    else if (newVal === "level") router.push("/level");
  };

  return (
    <Box sx={style}>
      <Box>
        <h2>Missions</h2>
      </Box>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Missions" value="missions" />
          <Tab label="Add" value="add" />
          <Tab label="Level" value="level" />
        </Tabs>
      </Box>
    </Box>
  );
}

const style = {
  maxWidth: 1200,
  margin: "0 auto",
};
