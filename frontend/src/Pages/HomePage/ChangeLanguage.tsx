import { Tabs } from '@mantine/core';
import React from 'react';

interface Props {
  
}

const ChangeLanguage: React.FC<Props> = () => {
  return (
    <>
    <Tabs color="black" defaultValue="first">
  <Tabs.List>
    <Tabs.Tab value="first">Teal tab</Tabs.Tab>
    <Tabs.Tab value="second" color="black">
      Blue tab
    </Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="first" pt="xs">
    First tab color is teal, it gets this value from context
  </Tabs.Panel>

  <Tabs.Panel value="second" pt="xs">
    Second tab color is blue, it gets this value from props, props have the priority and will
    override context value
  </Tabs.Panel>
</Tabs>
    </>

  );
};

export default ChangeLanguage;