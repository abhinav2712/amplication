import { Button, EnumButtonStyle, Icon } from "@amplication/design-system";
import React, { useState } from "react";
import { match } from "react-router-dom";
import "./CreateServiceWizard.scss";

import { AppRouteProps } from "../../routes/routesUtil";

type Props = AppRouteProps & {
  match: match<{
    workspace: string;
    project: string;
  }>;
};

const CreateServiceDatabase: React.FC<Props> = ({ moduleClass }) => {
  const [chooseOption, setChooseOPtion] = useState<string>("Monorepo");

  const PLUGIN_LOGO_BASE_URL =
    "https://raw.githubusercontent.com/amplication/plugin-catalog/master/assets/icons/";

  const handleOptionChoose = (event) => {
    setChooseOPtion(event.target.innerText);
  };

  return (
    <div className={`${moduleClass}__splitWrapper`}>
      <div className={`${moduleClass}__left`}>
        <div className={`${moduleClass}__service_name_header`}>
          <h2>Which database do you want to use?</h2>
        </div>
        <div className={`${moduleClass}__description_bottom`}>
          <h3>
            Amplication generates the service with all the required
            configuration and code to start working with a DB. You can easily
            change the type of the DB later in the plugins page
          </h3>
        </div>
      </div>
      <div className={`${moduleClass}__right`}>
        <div className={`${moduleClass}__repo_wrapper`}>
          <div className={`${moduleClass}__db_box`}>
            <div className={`${moduleClass}__db_up_buttons`}>
              <Button
                buttonStyle={EnumButtonStyle.Clear}
                onClick={handleOptionChoose}
              >
                <img
                  className={`${moduleClass}_db_btn`}
                  src={`${PLUGIN_LOGO_BASE_URL}db-postgres.png`}
                  alt={""}
                ></img>
              </Button>
              <label>PostgreSQL DB</label>
              <div className={`${moduleClass}__repository_btn_text`}>
                Use a Mongo database in the service generated by Amplication
              </div>
            </div>
            <div className={`${moduleClass}__db_up_buttons`}>
              <Button
                buttonStyle={EnumButtonStyle.Clear}
                onClick={handleOptionChoose}
              >
                <img
                  className={`${moduleClass}_db_btn`}
                  src={`${PLUGIN_LOGO_BASE_URL}db-mongo.png`}
                  alt={""}
                ></img>
              </Button>
              <label>Mongo DB</label>
              <div className={`${moduleClass}__repository_btn_text`}>
                Use a Mongo database in the service generated by Amplication
              </div>
            </div>
          </div>
          <div className={`${moduleClass}__db_box`}>
            <div className={`${moduleClass}__db_up_buttons`}>
              <Button
                buttonStyle={EnumButtonStyle.Clear}
                onClick={handleOptionChoose}
              >
                <img
                  className={`${moduleClass}_db_btn`}
                  src={`${PLUGIN_LOGO_BASE_URL}db-mysql.png`}
                  alt={""}
                ></img>
              </Button>
              <label>MySQL DB</label>
              <div className={`${moduleClass}__repository_btn_text`}>
                Use a Mongo database in the service generated by Amplication
              </div>
            </div>
            <div className={`${moduleClass}__db_up_buttons`}>
              <Button
                buttonStyle={EnumButtonStyle.Clear}
                onClick={handleOptionChoose}
              >
                <Icon
                  size="xsmall"
                  className={`${moduleClass}_db_btn`}
                  icon={"server"}
                ></Icon>
              </Button>
              <label>No database</label>
              <div className={`${moduleClass}__repository_btn_text`}>
                Start using your service without a database
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateServiceDatabase;
