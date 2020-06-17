import React, { useState, useEffect } from 'react';
import { Card, Steps } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';
import { StateType } from './model';
import Step1 from './components/Step1';
// import Step2 from './components/Step2';
// import Step3 from './components/Step3';
// import Step4 from './components/Step4';
// import Step5 from './components/Step5';
// import Step6 from './components/Step6';
// import Step7 from './components/Step7';
import styles from './style.less';

const { Step } = Steps;

interface NewProjectProps {
  current: StateType['current'];
}

const getCurrentStepAndComponent = (current?: string) => {
  switch (current) {
    // case 's2':
    //   return { step: 1, component: <Step2 /> };
    // case 's3':
    //   return { step: 2, component: <Step3 /> };
    // case 's4':
    //   return { step: 3, component: <Step4 /> };
    // case 's5':
    //   return { step: 4, component: <Step5 /> };
    // case 'confirm':
    //   return { step: 5, component: <Step6 /> };
    // case 'result':
    //   return { step: 6, component: <Step7 /> };
    case 'info':
    default:
      return { step: 0, component: <Step1 /> };
  }
};

const NewProject: React.FC<NewProjectProps> = ({ current }) => {
  const [stepComponent, setStepComponent] = useState<React.ReactNode>(<Step1 />);
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    const { step, component } = getCurrentStepAndComponent(current);
    setCurrentStep(step);
    setStepComponent(component);
  }, [current]);

  return (
    <PageHeaderWrapper content="新建一个标注项目" title="新建项目">
      <Card bordered={false}>
        <>
          <Steps current={currentStep} className={styles.steps}>
            <Step title="项目类型" />
            <Step title="基本信息" />
            <Step title="标注规则" />
            <Step title="标注描述" />
            <Step title="审核配置" />
            <Step title="信息确认" />
            <Step title="完成" />
          </Steps>
          {stepComponent}
        </>
      </Card>
    </PageHeaderWrapper>
  );
};

// 要求参数的名称与 namespace 完全一致
// 同时，也要与 model 的文件夹名称一致
// 即文件夹是 Order，Model 的 namespace 是 Order，参数也是 Order
export default connect(({ Orders }: { Orders: StateType }) => ({
  current: Orders.current,
}))(NewProject);
