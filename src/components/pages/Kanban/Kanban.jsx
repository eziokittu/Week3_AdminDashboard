import React from 'react';
import { useStateContext } from '../../Contexts/ContextProvider';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";

import "../../../../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
import '../../../../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css';
import "../../../../node_modules/@syncfusion/ej2-layouts/styles/bootstrap5.css";
import '../../../../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.css';
import '../../../../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css';
import "../../../../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css";
import "../../../../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
import "../../../../node_modules/@syncfusion/ej2-react-kanban/styles/bootstrap5.css";
import './Kanban.css'

const Kanban = () => {
  const { currentMode } = useStateContext();

  let data = [
    { Id: 1, Status: 'Open', Summary: 'Analyze the new requirements gathered from the customer.', Type: 'Story', Priority: 'Low', Tags: 'Analyze,Customer', Estimate: 3.5, Assignee: 'Nancy Davloio', RankId: 1 },
    { Id: 2, Status: 'InProgress', Summary: 'Fix the issues reported in the IE browser.', Type: 'Bug', Priority: 'Release Breaker', Tags: 'IE', Estimate: 2.5, Assignee: 'Janet Leverling', RankId: 2 },
    { Id: 3, Status: 'Testing', Summary: 'Fix the issues reported by the customer.', Type: 'Bug', Priority: 'Low', Tags: 'Customer', Estimate: '3.5', Assignee: 'Steven walker', RankId: 1 },
    { Id: 4, Status: 'Close', Summary: 'Arrange a web meeting with the customer to get the login page requirements.', Type: 'Others', Priority: 'Low', Tags: 'Meeting', Estimate: 2, Assignee: 'Michael Suyama', RankId: 1 },
    { Id: 5, Status: 'Validate', Summary: 'Validate new requirements', Type: 'Improvement', Priority: 'Low', Tags: 'Validation', Estimate: 1.5, Assignee: 'Robert King', RankId: 1 }
  ];

  return (
    <div className='mt-14 min-h-[700px] flex flex-col items-center justify-center'>
      {/* Heading */}
      <p className={`text-xl font-bold mb-4 ${currentMode==='light' ? 'text-black' : 'text-white'}`}>The Kanban Board</p>

      {/* Kanban Board */}
      <div className={`${currentMode==='light' ? 'bg-white' : 'bg-white'} p-4 rounded-lg shadow-md`}>
        <KanbanComponent 
          id="kanban" 
          keyField="Status" 
          dataSource={data} 
          cardSettings={{ contentField: "Summary", headerField: "Id" }}
          cssClass="custom-kanban"
        >
          <ColumnsDirective>
            <ColumnDirective headerText="To Do" keyField="Open" className="bg-blue-500 text-white" />
            <ColumnDirective headerText="In Progress" keyField="InProgress" className="bg-yellow-500 text-white" />
            <ColumnDirective headerText="Testing" keyField="Testing" className="bg-purple-500 text-white" />
            <ColumnDirective headerText="Done" keyField="Close" className="bg-green-500 text-white" />
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  );
}

export default Kanban;
