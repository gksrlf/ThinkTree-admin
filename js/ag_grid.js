class SelectFloatingFilterComponent {
  init(params) {
    this.eGui = document.createElement('div');
    this.filterParams = params;
    this.options = params.options || [];
    this.field = params.column.colDef.field;

    this.eGui.innerHTML = `
          <div class="select-filter">
            <select style="width: 100%;">
              <option value="0" select hidden></option>
              ${this.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
            </select>
          </div>
        `;

    this.eSelect = this.eGui.querySelector('select');

    this.eSelect.addEventListener('change', () => {
      const value = this.eSelect.value;
      this.filterParams.parentFilterInstance(instance => {
        instance.onFloatingFilterChanged('equals', value);
      });
    });
  }

  onParentModelChanged(parentModel) {
    if (!parentModel) {
      this.eSelect.value = '';
      return;
    }
    this.eSelect.value = parentModel.filter || '';
  }

  getGui() {
    return this.eGui;
  }
}

const init = () => {
  // Grid Options: Contains all of the Data Grid configurations

    // Row Data: The data to be displayed.
    const rowData = [{
      tdbCompanyCode: "370020811",
      category: "지사",
      licenseNumber: "16-000001",
      companyName: "신영 건설 주식회사",
      officeLocation: "나카시카와 군 다테야마 마치 오오시미즈 18",
      representativeName: "고평 공스케",
      applicationDate: "2024-09-02",
      applicationType: "사업 연도 종료 신고 (법인)",
      documentName: "FS_370020811_20240531",
      primaryBusiness: "16101",
      employeeCount: "41",
      acquisitionDate: "2024-11-29 13:50:02"
    },
      {
        tdbCompanyCode: "370020811",
        category: "국토교통",
        licenseNumber: "16-000001",
        companyName: "신영 건설 주식회사",
        officeLocation: "나카시카와 군 다테야마 마치 오오시미즈 18",
        representativeName: "고평 공스케",
        applicationDate: "2024-09-02",
        applicationType: "사업 연도 종료 신고 (법인)",
        documentName: "FS_370020811_20240531",
        primaryBusiness: "16101",
        employeeCount: "41",
        acquisitionDate: "2024-11-29 13:50:02"
      }
    ]
    // Column Definitions: Defines the columns to be displayed.
    const columnDefs = [{
      field: "tdbCompanyCode",
      headerName: "TDB 기업 코드",
      cellStyle: {
        textAlign: 'center'
      }
    },
      {
        field: "category",
        headerName: "구분",
        filter: 'agTextColumnFilter',
        floatingFilterComponent: 'selectFloatingFilter',
        floatingFilterComponentParams: {
          options: ["지사", "국토교통"]
        }
      },
      {
        field: "licenseNumber",
        headerName: "허가 번호"
      },
      {
        field: "companyName",
        headerName: "상호 또는 명칭",
        minWidth: 180
      },
      {
        field: "officeLocation",
        headerName: "영업소의 소재지",
        minWidth: 220
      },
      {
        field: "representativeName",
        headerName: "대표자명",
        cellStyle: {
          textAlign: 'center'
        }
      },
      {
        field: "applicationDate",
        headerName: "신청/신고 날짜",
        cellStyle: {
          textAlign: 'center'
        },
        minWidth: 180,
        filter: 'agDateColumnFilter',
      },
      {
        field: "applicationType",
        headerName: "신청/신고 구분",
        minWidth: 250
      },
      {
        field: "documentName",
        headerName: "서류명",
        minWidth: 200
      },
      {
        headerName: '',
        field: "download",
        cellRenderer: () => {
          return '<button class="align-middle bg-black icon-filetype-pdf"></button>';
        },
        maxWidth: 100,
        filter: false,
        cellStyle: {
          textAlign: 'center'
        },
        sortable: false
      },
      {
        field: "primaryBusiness",
        headerName: "C2 주요 사업",
        cellStyle: {
          textAlign: 'center'
        }
      },
      {
        field: "employeeCount",
        headerName: "C2 직원 수",
        cellStyle: {
          textAlign: 'center'
        }
      },
      {
        field: "acquisitionDate",
        headerName: "취득일",
        minWidth: 200
      },
    ]


  const repeatCount = 4; // 반복 횟수
  let companyCodeSuffix = 1;
  let licenseNumberSuffix = 1;
  let documentNameSuffix = 1;

  for (let i = 0; i < repeatCount; i++) {
    rowData.forEach(item => {
      rowData.push({
        ...item,
        tdbCompanyCode: `37002081${companyCodeSuffix++}`, // 순차적으로 번호 증가
        licenseNumber: `16-00000${licenseNumberSuffix++}`, // 순차적으로 번호 증가
        documentName: `FS_37002081${documentNameSuffix++}_20240531` // 순차적으로 번호 증가
      });
    });
  }

  const rootStyles = window.getComputedStyle(document.documentElement)
  const myTheme = agGrid.themeQuartz.withParams({
    oddRowBackgroundColor: "rgb(0, 0, 0, 0.03)",
    accentColor: rootStyles.getPropertyValue('--list-ag-grid-hover')
  });

  const gridOptions = {
    columnDefs: columnDefs,
    defaultColDef: {
      flex: 1,
      editable: false,
      minWidth: 150,
      filter: true,
      floatingFilter: true,
      suppressHeaderMenuButton: true,
      suppressFloatingFilterButton: true,
      filterParams: {
        buttons: ['reset'],
        maxNumConditions: 1
      },
    },
    components: {
      selectFloatingFilter: SelectFloatingFilterComponent, // 커스텀  filter 등록
    },
    columnHoverHighlight: true,
    rowData: rowData, // 업데이트된 데이터 사용
    theme: myTheme,
    pagination: true,
    loadThemeGoogleFonts: false,
  };


// Your Javascript code to create the Data Grid
  const myGridElement = document.querySelector('#myGrid');
  agGrid.createGrid(myGridElement, gridOptions);


  document.querySelector('#ag-92-input')

  // filter control
  document.querySelector('#filter').addEventListener('click', (e) => {
    if(e.target.classList.contains('on')) {
      e.target.classList.remove('on')
    } else {
      e.target.classList.add('on')
    }

  })
}

(() => {
  init()
})()
