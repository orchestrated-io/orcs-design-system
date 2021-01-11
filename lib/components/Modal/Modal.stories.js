import React, { useState } from "react";
import Button from "../Button";
import Modal from ".";
import { H3, P } from "../Typography";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import Flex from "../Flex";
import Spacer from "../Spacer";
import Icon from "../Icon";
import mdx from "./Modal.mdx";

export default {
  title: "Components/Modal",
  parameters: {
    docs: {
      page: mdx
    }
  },
  component: Modal
};

const Basic = () => {
  const [visible, setVisible] = useState(false);
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const handleOnConfirm = () => {
    setVisible(false);
  };
  const onToggleModal = (visible) => () => {
    setVisible(visible);
  };

  return (
    <>
      <Button onClick={handleOnButtonClick}>Open basic modal</Button>
      <Modal
        visible={visible}
        handleOnConfirm={handleOnConfirm}
        onClose={onToggleModal(false)}
      >
        <Spacer mb="r">
          <H3>Modal Title</H3>
          <P>
            Content of the modal. Modal accepts any child components or content.
          </P>
        </Spacer>
      </Modal>
    </>
  );
};
export const basicModal = () => <Basic />;
basicModal.parameters = {
  docs: {
    source: {
      code: `const Basic = () => {
        const [visible, setVisible] = useState(false);
        const handleOnButtonClick = () => {
          setVisible(true);
        };
        const handleOnConfirm = () => {
          setVisible(false);
        };
        const onToggleModal = visible => () => {
          setVisible(visible);
        };
      
        return (
          <>
            <Button onClick={handleOnButtonClick}>Open basic modal</Button>
            <Modal
              visible={visible}
              handleOnConfirm={handleOnConfirm}
              onClose={onToggleModal(false)}
            >
              <Spacer mb="r">
                <H3>Modal Title</H3>
                <P>
                  Content of the modal. Modal accepts any child components or content.
                </P>
              </Spacer>
            </Modal>
          </>
        );
      };`
    }
  }
};

const Advanced = () => {
  const [visible, setVisible] = useState(false);
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const handleOnConfirm = () => {
    setVisible(false);
  };
  const onToggleModal = (visible) => () => {
    setVisible(visible);
  };
  const modalHeader = <H3>Modal Title</H3>;
  const modalFooter = (
    <Button onClick={handleOnConfirm}>Go to full article</Button>
  );
  return (
    <>
      <Button onClick={handleOnButtonClick}>Open advanced modal</Button>
      <Modal
        maxWidth="500px"
        maxHeight="400px"
        height="90vh"
        width="90vw"
        visible={visible}
        handleOnConfirm={handleOnConfirm}
        onClose={onToggleModal(false)}
        headerContent={modalHeader}
        footerContent={modalFooter}
      >
        <Spacer my="r">
          <P>
            Content of the modal. Modal accepts any child components or content.
            This content will be scrollable if it exeeds the height of the
            modal.
          </P>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </P>
          <P>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </P>
        </Spacer>
      </Modal>
    </>
  );
};
export const advancedModal = () => <Advanced />;
advancedModal.parameters = {
  docs: {
    source: {
      code: `const Advanced = () => {
        const [visible, setVisible] = useState(false);
        const handleOnButtonClick = () => {
          setVisible(true);
        };
        const handleOnConfirm = () => {
          setVisible(false);
        };
        const onToggleModal = visible => () => {
          setVisible(visible);
        };
        const modalHeader = <H3>Modal Title</H3>;
        const modalFooter = <Button>Go to full article</Button>;
        return (
          <>
            <Button onClick={handleOnButtonClick}>Open advanced modal</Button>
            <Modal
              maxWidth="500px"
              maxHeight="400px"
              height="90vh"
              width="90vw"
              visible={visible}
              handleOnConfirm={handleOnConfirm}
              onClose={onToggleModal(false)}
              headerContent={modalHeader}
              footerContent={modalFooter}
            >
              <Spacer my="r">
                <P>
                  Content of the modal. Modal accepts any child components or content.
                  This content will be scrollable if it exeeds the height of the
                  modal.
                </P>
                <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </P>
                <P>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                  eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                  sed quia non numquam eius modi tempora incidunt ut labore et dolore
                  magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                  consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                  pariatur?
                </P>
              </Spacer>
            </Modal>
          </>
        );
      };`
    }
  }
};
const BasicDialogue = () => {
  const [visible, setVisible] = useState(false);
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const handleOnConfirm = () => {
    setVisible(false);
  };
  const onToggleModal = (visible) => () => {
    setVisible(visible);
  };
  const modalFooter = (
    <Flex>
      <Spacer mr="s">
        <Button onClick={handleOnConfirm} px="l">
          OK
        </Button>
        <Button variant="ghost" onClick={onToggleModal(false)}>
          Cancel
        </Button>
      </Spacer>
    </Flex>
  );
  return (
    <>
      <Button onClick={handleOnButtonClick} variant="danger" iconLeft>
        <Icon icon={["fas", "trash"]} />
        Delete data
      </Button>
      <Modal
        visible={visible}
        handleOnConfirm={handleOnConfirm}
        onClose={onToggleModal(false)}
        footerContent={modalFooter}
      >
        <Spacer mb="r">
          <P weight="bold" marginBottom="sm">
            This will remove all data from the application.
          </P>
          <P>Do you wish to continue?</P>
        </Spacer>
      </Modal>
    </>
  );
};
export const basicDialogueModal = () => <BasicDialogue />;
basicDialogueModal.parameters = {
  docs: {
    source: {
      code: `const BasicDialogue = () => {
        const [visible, setVisible] = useState(false);
        const handleOnButtonClick = () => {
          setVisible(true);
        };
        const handleOnConfirm = () => {
          setVisible(false);
        };
        const onToggleModal = visible => () => {
          setVisible(visible);
        };
        const modalFooter = (
          <Flex>
            <Spacer mr="s">
              <Button onClick={handleOnConfirm} px="l">
                OK
              </Button>
              <Button variant="ghost" onClick={onToggleModal(false)}>
                Cancel
              </Button>
            </Spacer>
          </Flex>
        );
        return (
          <>
            <Button onClick={handleOnButtonClick} variant="danger" iconLeft>
              <Icon icon={["fas", "trash"]} />
              Delete data
            </Button>
            <Modal
              visible={visible}
              handleOnConfirm={handleOnConfirm}
              onClose={onToggleModal(false)}
              footerContent={modalFooter}
            >
              <Spacer mb="r">
                <P weight="bold" marginBottom="sm">
                  This will remove all data from the application.
                </P>
                <P>Do you wish to continue?</P>
              </Spacer>
            </Modal>
          </>
        );
      };`
    }
  }
};
const EditDialogue = () => {
  const [visible, setVisible] = useState(false);
  const handleOnButtonClick = () => {
    setVisible(true);
  };
  const handleOnConfirm = () => {
    setVisible(false);
  };
  const onToggleModal = (visible) => () => {
    setVisible(visible);
  };
  const modalHeader = <H3>Modify Details</H3>;
  const modalFooter = (
    <Flex>
      <Spacer mr="s">
        <Button onClick={handleOnConfirm} variant="success" iconLeft>
          <Icon icon={["fas", "save"]} />
          Save
        </Button>
        <Button variant="ghost" onClick={onToggleModal(false)} iconLeft>
          <Icon icon={["fas", "times"]} />
          Cancel
        </Button>
      </Spacer>
    </Flex>
  );
  return (
    <>
      <Button onClick={handleOnButtonClick} iconLeft>
        <Icon icon={["fas", "edit"]} />
        Modify Details
      </Button>
      <Modal
        visible={visible}
        handleOnConfirm={handleOnConfirm}
        onClose={onToggleModal(false)}
        headerContent={modalHeader}
        footerContent={modalFooter}
      >
        <Spacer my="r">
          <TextInput
            id="textInput1"
            key="textInput1"
            type="text"
            fullWidth
            label="Name"
            placeholder="E.g. Awesome Project"
          />
          <TextArea id="TextArea01" label="Description" fullWidth />
        </Spacer>
      </Modal>
    </>
  );
};
export const editDialogueModal = () => <EditDialogue />;
editDialogueModal.parameters = {
  docs: {
    source: {
      code: `const EditDialogue = () => {
        const [visible, setVisible] = useState(false);
        const handleOnButtonClick = () => {
          setVisible(true);
        };
        const handleOnConfirm = () => {
          setVisible(false);
        };
        const onToggleModal = visible => () => {
          setVisible(visible);
        };
        const modalHeader = <H3>Modify Details</H3>;
        const modalFooter = (
          <Flex>
            <Spacer mr="s">
              <Button onClick={handleOnConfirm} variant="success" iconLeft>
                <Icon icon={["fas", "save"]} />
                Save
              </Button>
              <Button variant="ghost" onClick={onToggleModal(false)} iconLeft>
                <Icon icon={["fas", "times"]} />
                Cancel
              </Button>
            </Spacer>
          </Flex>
        );
        return (
          <>
            <Button onClick={handleOnButtonClick} iconLeft>
              <Icon icon={["fas", "edit"]} />
              Modify Details
            </Button>
            <Modal
              visible={visible}
              handleOnConfirm={handleOnConfirm}
              onClose={onToggleModal(false)}
              headerContent={modalHeader}
              footerContent={modalFooter}
            >
              <Spacer my="r">
                <TextInput
                  id="textInput1"
                  key="textInput1"
                  type="text"
                  fullWidth
                  label="Name"
                  placeholder="E.g. Awesome Project"
                />
                <TextArea id="TextArea01" label="Description" fullWidth />
              </Spacer>
            </Modal>
          </>
        );
      };`
    }
  }
};
